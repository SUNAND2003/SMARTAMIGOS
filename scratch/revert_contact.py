import subprocess

# 1. Restore contact.html from git HEAD
subprocess.run(["git", "checkout", "HEAD", "contact.html"], check=True)
print("Restored contact.html from HEAD")

# 2. Revert style.css additions
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

marker = "/* ===================================================="
if marker in css:
    css = css[:css.index(marker)].rstrip() + "\n"
    with open('style.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("Stripped contact page modernization styles from style.css")
else:
    print("Marker not found in style.css")

# 3. Revert script.js additions
with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

js_start = "// contact form interactive pills and submission"
js_end = "// testimonials"

if js_start in js and js_end in js:
    before = js[:js.index(js_start)]
    after = js[js.index(js_end):]
    js = before + after
    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(js)
    print("Removed contact form pills logic from script.js")
else:
    print("Contact form JS marker not found in script.js")

