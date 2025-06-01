#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { Command } from "commander";
import chalk from "chalk";

class TagFinder {
  constructor(rootDir = ".") {
    this.rootDir = rootDir;
    this.jsExtensions = [".js", ".ts", ".jsx", ".tsx"];
  }

  // Extract tags from file content - supports both single and double quotes
  extractTags(filePath) {
    try {
      const content = fs.readFileSync(filePath, "utf8");
      const tagRegex = /\/\/\s*tags:\s*(\[.*?\])/i;
      const match = content.match(tagRegex);

      if (match) {
        try {
          // Normalize quotes to double quotes for JSON parsing
          const normalizedTags = match[1].replace(/'/g, '"');
          const tagsArray = JSON.parse(normalizedTags);
          return Array.isArray(tagsArray) ? tagsArray : [];
        } catch (e) {
          console.warn(
            chalk.yellow(`⚠️  Warning: Invalid tag format in ${filePath}`)
          );
          return [];
        }
      }
      return [];
    } catch (error) {
      console.warn(
        chalk.yellow(`⚠️  Warning: Could not read file ${filePath}`)
      );
      return [];
    }
  }

  // Recursively find all JS files
  findJSFiles(dir = this.rootDir) {
    let files = [];

    try {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          // Skip node_modules and other common directories
          if (!["node_modules", ".git", "dist", "build"].includes(item)) {
            files = files.concat(this.findJSFiles(fullPath));
          }
        } else if (this.jsExtensions.includes(path.extname(item))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.warn(
        chalk.yellow(`⚠️  Warning: Could not read directory ${dir}`)
      );
    }

    return files;
  }

  // Get all files with their tags
  getAllFilesWithTags() {
    const files = this.findJSFiles();
    const result = [];

    for (const file of files) {
      const tags = this.extractTags(file);
      if (tags.length > 0) {
        result.push({
          file: path.relative(this.rootDir, file),
          tags: tags,
          fullPath: file,
        });
      }
    }

    return result;
  }

  // Find files by tags
  findByTags(searchTags, matchAll = false) {
    const allFiles = this.getAllFilesWithTags();

    return allFiles.filter((fileInfo) => {
      if (matchAll) {
        // All search tags must be present
        return searchTags.every((tag) =>
          fileInfo.tags.some((fileTag) =>
            fileTag.toLowerCase().includes(tag.toLowerCase())
          )
        );
      } else {
        // At least one search tag must be present
        return searchTags.some((tag) =>
          fileInfo.tags.some((fileTag) =>
            fileTag.toLowerCase().includes(tag.toLowerCase())
          )
        );
      }
    });
  }

  // Get all unique tags
  getAllTags() {
    const allFiles = this.getAllFilesWithTags();
    const tagSet = new Set();

    allFiles.forEach((fileInfo) => {
      fileInfo.tags.forEach((tag) => tagSet.add(tag));
    });

    return Array.from(tagSet).sort();
  }

  // Display results in a formatted way with colors
  displayResults(results, showTags = true) {
    if (results.length === 0) {
      console.log(chalk.red("❌ No files found matching the criteria."));
      return;
    }

    console.log(
      chalk.green(`\n📁 Found ${chalk.bold(results.length)} file(s):\n`)
    );

    results.forEach((fileInfo, index) => {
      console.log(chalk.cyan(`${index + 1}. ${chalk.bold(fileInfo.file)}`));
      if (showTags) {
        const coloredTags = fileInfo.tags
          .map((tag) => chalk.magenta(`'${tag}'`))
          .join(", ");
        console.log(chalk.gray(`   Tags: [${coloredTags}]`));
      }
      console.log();
    });
  }
}

// CLI Setup
const program = new Command();
const tagFinder = new TagFinder();

program
  .name("tag-finder")
  .description(
    chalk.blue("Find and manage tagged files in your DS&A practice repository")
  )
  .version("1.0.0");

program
  .command("list")
  .description("List all tagged files")
  .action(() => {
    const files = tagFinder.getAllFilesWithTags();
    tagFinder.displayResults(files);
  });

program
  .command("tags")
  .description("Show all available tags")
  .action(() => {
    const tags = tagFinder.getAllTags();
    console.log(chalk.blue("\n🏷️  Available tags:\n"));
    tags.forEach((tag, index) => {
      console.log(chalk.magenta(`${index + 1}. ${tag}`));
    });
    console.log(chalk.green(`\nTotal: ${chalk.bold(tags.length)} tags`));
  });

program
  .command("find <tags...>")
  .description("Find files by tags (space-separated)")
  .option("-a, --all", "Match ALL tags (AND logic)", false)
  .option("-c, --count", "Show only count", false)
  .action((tags, options) => {
    const results = tagFinder.findByTags(tags, options.all);

    if (options.count) {
      console.log(
        chalk.green(
          `Found ${chalk.bold(results.length)} file(s) matching the criteria.`
        )
      );
    } else {
      const searchType = options.all ? chalk.red("ALL") : chalk.yellow("ANY");
      const tagList = tags.map((tag) => chalk.magenta(tag)).join(", ");
      console.log(
        chalk.blue(
          `\n🔍 Searching for files with ${searchType} of: [${tagList}]`
        )
      );
      tagFinder.displayResults(results);
    }
  });

program
  .command("random")
  .description("Get a random tagged file for practice")
  .option("-t, --tags <tags...>", "Filter by specific tags")
  .action((options) => {
    let files = tagFinder.getAllFilesWithTags();

    if (options.tags && options.tags.length > 0) {
      files = tagFinder.findByTags(options.tags, false);
    }

    if (files.length === 0) {
      console.log(chalk.red("❌ No files found for random selection."));
      return;
    }

    const randomFile = files[Math.floor(Math.random() * files.length)];
    console.log(chalk.green("\n🎲 Random file for practice:\n"));
    console.log(chalk.cyan(`📄 ${chalk.bold(randomFile.file)}`));
    const coloredTags = randomFile.tags
      .map((tag) => chalk.magenta(`'${tag}'`))
      .join(", ");
    console.log(chalk.blue(`🏷️  Tags: [${coloredTags}]`));
    console.log(chalk.gray(`📍 Full path: ${randomFile.fullPath}\n`));
  });

program
  .command("stats")
  .description("Show statistics about your tagged files")
  .action(() => {
    const files = tagFinder.getAllFilesWithTags();
    const allTags = tagFinder.getAllTags();

    // Count files per tag
    const tagCount = {};
    files.forEach((fileInfo) => {
      fileInfo.tags.forEach((tag) => {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      });
    });

    console.log(chalk.green("\n📊 Repository Statistics:\n"));
    console.log(chalk.cyan(`Total tagged files: ${chalk.bold(files.length)}`));
    console.log(chalk.cyan(`Total unique tags: ${chalk.bold(allTags.length)}`));
    console.log(
      chalk.cyan(
        `Average tags per file: ${chalk.bold(
          (
            files.reduce((sum, f) => sum + f.tags.length, 0) / files.length
          ).toFixed(1)
        )}`
      )
    );

    console.log(chalk.blue("\n🏷️  Most used tags:"));
    Object.entries(tagCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .forEach(([tag, count]) => {
        console.log(chalk.magenta(`   ${tag}: ${chalk.yellow(count)} file(s)`));
      });
  });

// Parse arguments
program.parse();

export default TagFinder;
