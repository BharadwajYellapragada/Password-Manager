import rsa

publickey, privatekey = rsa.newkeys(512)

with open('keys/public.pem', 'w+') as f:
    f.write(publickey.save_pkcs1().decode())

with open('keys/private.pem', 'w+') as f:
    f.write(privatekey.save_pkcs1().decode())