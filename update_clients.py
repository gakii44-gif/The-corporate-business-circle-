import os
import re

specials = {
    "blue-flag-tvs": "/assets/client-logos/tvs-motor.png",
    "nigerian-embassy": "/assets/client-logos/nigeria-coat-of-arms.svg",
    "national-revenue-authority": "/assets/client-logos/nra-south-sudan.png",
    "ministry-peace-building": "/assets/client-logos/south-sudan-coat-of-arms.svg",
    "council-of-states": "/assets/client-logos/south-sudan-coat-of-arms.svg",
    "juba-city-council": "/assets/client-logos/south-sudan-coat-of-arms.svg",
    "capital-fm": "/assets/client-logos/capital-fm.png",
    "spectrum-advertising": "/assets/client-logos/spectrum-advertising.png",
    "lena-printers": "/assets/client-logos/lena-printers.png",
}

def resolve_logo(cid):
    if cid in specials:
        return specials[cid]
    for ext in [".png", ".svg", ".jpg"]:
        p = f"public/assets/client-logos/{cid}{ext}"
        if os.path.exists(p):
            return f"/assets/client-logos/{cid}{ext}"
    return None

with open("src/data/clientsData.ts", "r", encoding="utf-8") as f:
    lines = f.readlines()

new_lines = []
in_client = False
current_cid = None
has_logo = False
category_name_line_idx = -1

for line in lines:
    id_match = re.search(r"^\s*id:\s*['\"]([^'\"]+)['\"],", line)
    if id_match:
        in_client = True
        current_cid = id_match.group(1)
        has_logo = False

    if in_client and "logo:" in line:
        has_logo = True
        # update logo to correct path
        target_logo = resolve_logo(current_cid)
        if target_logo:
            indent = line[:line.find("logo:")]
            new_lines.append(f"{indent}logo: '{target_logo}',\n")
            continue

    if in_client and ("categoryName:" in line):
        new_lines.append(line)
        target_logo = resolve_logo(current_cid)
        # Check if next lines don't already have logo
        # We will insert if not has_logo
        continue

    if in_client and re.search(r"^\s*\},", line):
        # closing client object
        if not has_logo and current_cid:
            target_logo = resolve_logo(current_cid)
            if target_logo:
                indent = "    "
                new_lines.append(f"{indent}logo: '{target_logo}',\n")
        in_client = False
        current_cid = None
        has_logo = False

    new_lines.append(line)

with open("src/data/clientsData.ts", "w", encoding="utf-8") as f:
    f.writelines(new_lines)

print("Updated clientsData.ts successfully!")
