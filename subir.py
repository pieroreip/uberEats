import os




def subir():
    sw=0
    seguro=input("Seguro de hacer git add? y/n : ")

    if seguro.lower()=='y':
        os.system('git add .')
        os.system('git add .')
        while sw==0: 
            mensaje=input("Mensaje para el commit \n -> ")
            estado=input("Seguro del mensaje? y/n \n(Cancelar Operacion completa : 'ccoo' ): ")
            if estado.lower()=='y':
                os.system(f'git commit -m "{mensaje}" ')
                os.system('git push origin main')
                print("Operacion terminada")
                sw=1
            elif estado=="ccoo":
                os.system('cls')
                print('Operacion cancelada')
                sw=1
    else:
        print('Operacion cancelada')
    

subir()