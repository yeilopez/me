import re

for filename in ['index.html', 'en.html']:
    with open(filename, 'r') as f:
        content = f.read()
    
    # We want to wrap the photo-box and footer-card in a <div class="bottom-row">
    pattern = r'(<section class="card photo-box">.*?</section>\s*<section class="card footer-card">.*?</section>)'
    
    def replacer(match):
        return '<div class="bottom-row">\n        ' + match.group(1).replace('\n', '\n        ') + '\n      </div>'
        
    new_content = re.sub(pattern, replacer, content, flags=re.DOTALL)
    
    with open(filename, 'w') as f:
        f.write(new_content)
