from html.parser import HTMLParser
import glob

class TagValidator(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.void_tags = {'meta', 'link', 'img', 'br', 'hr', 'input', 'source', 'area', 'base', 'col', 'embed', 'param', 'track', 'wbr'}
        self.errors = []

    def handle_starttag(self, tag, attrs):
        if tag not in self.void_tags:
            self.stack.append(tag)

    def handle_endtag(self, tag):
        if tag in self.void_tags:
            return
        if not self.stack:
            self.errors.append(f"Unexpected closing tag </{tag}> with empty stack")
        elif self.stack[-1] == tag:
            self.stack.pop()
        else:
            self.errors.append(f"Mismatched closing tag: expected </{self.stack[-1]}>, got </{tag}>")

for fpath in glob.glob("*.html"):
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    v = TagValidator()
    try:
        v.feed(content)
        if v.errors:
            print(f"[FAIL] {fpath}: {len(v.errors)} errors: {v.errors[:3]}")
        elif v.stack:
            print(f"[FAIL] {fpath}: Unclosed tags: {v.stack}")
        else:
            print(f"[OK] {fpath}: Valid HTML structure")
    except Exception as e:
        print(f"[ERROR] {fpath}: {e}")

