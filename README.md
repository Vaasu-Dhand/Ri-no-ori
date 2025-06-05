# Ri no ori

A tagged practice repository for data structures and algorithms with a CLI tool for finding and managing practice problems.

## 🏷️ Tagging System

Add tags to your files using this format at the top:

```javascript
// tags: ['array', 'easy', 'sorting']
```

### Recommended Tags

**Difficulty:**

- `easy`, `medium`, `hard`

**Data Structures:**

- `array`, `string`, `linked-list`, `stack`, `queue`, `tree`, `graph`, `hash-table`, `heap`

**Algorithms:**

- `sorting`, `searching`, `recursion`, `dynamic-programming`, `greedy`, `backtracking`
- `bfs`, `dfs`, `binary-search`, `two-pointer`, `sliding-window`

**Problem Types:**

- `counting`, `traversal`, `optimization`, `math`, `simulation`

## 🚀 Setup

1. Install dependencies:

```bash
npm install
```

2. Make the CLI executable (optional):

```bash
chmod +x tag-finder.js
```

3. Add tags to your files and start using the CLI!

## 📋 CLI Commands

### List all tagged files

```bash
node tag-finder.js list
# or
npm run list
```

### Show all available tags

```bash
node tag-finder.js tags
```

### Find files by tags

```bash
# Find files with ANY of these tags
node tag-finder.js find array easy

# Find files with ALL of these tags (AND logic)
node tag-finder.js find array easy --all

# Just show count
node tag-finder.js find array --count
```

### Get a random file for practice

```bash
# Random from all tagged files
node tag-finder.js random

# Random from specific tags
node tag-finder.js random --tags easy array
```

### Show repository statistics

```bash
node tag-finder.js stats
```

## 📖 Usage Examples

```bash
# Find all easy problems
node tag-finder.js find easy

# Find array problems that are medium difficulty
node tag-finder.js find array medium --all

# Get a random easy problem to practice
node tag-finder.js random --tags easy

# Show what tags you're using
node tag-finder.js tags
```

## 📁 Project Structure

```
/algos
 - bfs.js               // tags: ['graph', 'traversal', 'bfs', 'medium']
 - dfs.js               // tags: ['graph', 'traversal', 'dfs', 'medium']
/data-structures
 - linked-list.js       // tags: ['linked-list', 'medium']
/exercise
 - Count-triplet.js     // tags: ['array', 'easy', 'counting']
 - factorial.js         // tags: ['recursion', 'easy', 'math']
```
