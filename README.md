# Takahashi.js
This is a [Takahashi-style](https://en.wikipedia.org/wiki/Takahashi_method) (Japanese: [高橋メソッド](https://ja.wikipedia.org/wiki/高橋メソッド)) slides generator written in pure native JavaScript, which let you use Markdown-like syntax to make slides.

Please see [DEMO](https://wenqi73.github.io/speech/index.html)

# Requirement
- A modern HTML5 compatible web browser.

# Usage
1. download/clone this repository.
2. Edit `source.md`
3. If need any style customization, please free free to edit `slides.html` by your self.

# Available Markdown Syntax
The parser of `Takahashi.js` accepts a Markdown-like syntax:

- `# This is Title` : Only one level title is accepted. Don't forget add a space after `#` .
- `- This is subtitle` : placed under title.
- `# ![](path/to/image.jpg)` : Fullscreen image
- `![](path/to/image.jpg)` : Image + Title (+ Subtitle)
- `\\` : A new line.
- `*italic*`
- `**colored emphasis**`
- `+striked+` : this syntax is inspired by Org-mode.
- ` ```lisp ` : The same as Github-flavored Markdown -- code block with syntax highlight. 

# Play
```bash
npm i express
node server.js
```
Open `http://localhost:3001`

# License
MIT
