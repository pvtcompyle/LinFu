'''
Normalize the following path using your programming language of choice to obtain the flag: OS{/which/parts/../real/../parts/are/real/../fake}
'''
import os
flag = "OS{/which/parts/../real/../parts/are/real/../fake}"

print(os.path.normpath(flag))