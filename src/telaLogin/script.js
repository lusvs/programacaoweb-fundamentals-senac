function loginSenac()
{
   let usuario = document.getElementById('txtUsuario').value;
   let senha = document.getElementById('txtSenha').value;
   let menasagem = document.getElementById('mensagem');
 
   if(usuario == 'admin' && senha == '123')
   {
    menasagem.style.color = 'green';
    menasagem.innerText = 'Usuario Correto';

    setTimeout(() => {
        window.location.href = 'https://www.google.com.br';
    }, 5000);
    }

   else
    {
    menasagem.style.color = 'red';
    menasagem.innerText = 'Usuario/senha invalida';
   }
}