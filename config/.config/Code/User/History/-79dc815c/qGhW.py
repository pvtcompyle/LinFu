import re

valid_hex = re.compile("[0-9]|[a-fA-F]")
s = "OS{7bfz631je78rb65n044ua}"
t = s.replace(r"OS{", "").replace(r"}","")
st = list(t)

print(t)
