@AGENTS.md

# Git workflow

After every code change (each feature/screen/fix, not every single file edit), commit and push to `origin/main` automatically — don't wait to be asked. Use a descriptive commit message summarizing what changed. Remote: git@github.com:04akshay/Smell-the-Coffee.git.

# Knowledge Base

`KNOWLEDGE_BASE.md` is the authoritative documentation for this project. Every commit that adds, modifies, or removes a page, feature, component, user flow, design token, or agent guideline **must** include a corresponding update to `KNOWLEDGE_BASE.md` in the same commit. Specifically:

- New page or screen → add a section under §5 and a flow under §6 if applicable
- New component → add an entry to §7 if it has non-obvious usage
- Removed or renamed route/component → update all references
- New agent rule → add to §8
- Every commit → add a row to the §9 changelog
