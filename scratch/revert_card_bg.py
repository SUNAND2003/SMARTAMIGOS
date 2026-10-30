import re

# 1. Update style.css
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Pattern for service card section in style.css
old_card_css = """/* services */
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px}
.card{padding:32px;border-radius:20px;overflow:hidden;transition:transform .4s,background .4s}.card:hover{transform:translateY(-10px);background:rgba(255,255,255,.07)}
.card:after{content:"";position:absolute;right:-40px;top:-40px;width:160px;height:160px;border-radius:50%;background:rgba(139,92,246,.22);filter:blur(40px);transition:.5s}.card:hover:after{background:rgba(47,107,255,.35)}
.card .n{display:flex;justify-content:space-between;align-items:flex-start}
.ic{width:48px;height:48px;border-radius:12px;background:linear-gradient(135deg,var(--blue),var(--violet));display:grid;place-items:center;font:700 1.1rem Outfit;transition:transform .4s}.card:hover .ic{transform:rotate(12deg) scale(1.1)}
.card h3{font-size:1.5rem;margin:28px 0 8px}.card p{color:var(--mut);font-size:.9rem}
.card ul{display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:.78rem;color:rgba(255,255,255,.7);max-height:0;opacity:0;overflow:hidden;transition:.5s;margin-top:0}
.card:hover ul{max-height:150px;opacity:1;margin-top:20px}.card li:before{content:"✓ ";color:var(--blue)}
.card a{display:inline-block;margin-top:20px;color:var(--blue);font-weight:600;font-size:.88rem;position:relative;z-index:1}"""

# Replace the block from /* services */ up to /* why */
pattern = re.compile(r'/\* services \*/.*?(?=/\* why \*/)', re.DOTALL)
if pattern.search(css):
    css = pattern.sub(old_card_css + "\n", css)
    with open('style.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("Updated style.css: restored previous clean card styling without background image")
else:
    print("Could not find services pattern in style.css")

# 2. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    idx = f.read()

idx_clean = re.sub(r'<div class="card-bg"[^>]*></div>', '', idx)
if idx != idx_clean:
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(idx_clean)
    print("Updated index.html: removed card-bg from service cards")
else:
    print("No card-bg found in index.html")

# 3. Update services.html
with open('services.html', 'r', encoding='utf-8') as f:
    srv = f.read()

srv_clean = re.sub(r'<div class="card-bg"[^>]*></div>', '', srv)
if srv != srv_clean:
    with open('services.html', 'w', encoding='utf-8') as f:
        f.write(srv_clean)
    print("Updated services.html: removed card-bg from service cards")
else:
    print("No card-bg found in services.html")

