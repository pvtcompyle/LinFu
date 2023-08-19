import ipaddress as ipa

def build_cidr_dict (ip):
    cidr = {}
    for i in range(32, 24, -1):
        print(i)
        try:
            cidr[i] = ipa.IPv4Network(f"{ip}/{i}")
        except ValueError as e:
            if "has host bits set" in e.__str__():
                print("invalid IP address")
                ip = input("Try another IP address: ")
                build_cidr_dict(f'{ip}/{i}')
    return cidr
ip = "10.10.1.1"
[print(key,value) for key, value in build_cidr_dict(ip).items()]
