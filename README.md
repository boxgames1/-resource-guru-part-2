# Part 2 – Refactoring an expression tree

⏱ We estimate that this should take 30 to 60 minutes, but please take as much or as little time as you need.

We have provided an implementation of an expression tree for basic arithmetic in [JavaScript](#file-tree-js), [TypeScript](#file-tree-ts) and [Ruby](#file-tree-rb). Pick whichever language you feel more comfortable working in for this section.

This implementation suffers from a number of software design flaws that make it difficult for callers to consume the tree, and make it difficult to adapt the code when requirements change.

Apply your knowledge of good software design principles such as the [SOLID principles](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design) and the [four rules of simple design](https://martinfowler.com/bliki/BeckDesignRules.html) to refactor and improve the design of this code. Feel free to change anything in the file as part of your refactoring, apart from the final assertions that consume the tree.
