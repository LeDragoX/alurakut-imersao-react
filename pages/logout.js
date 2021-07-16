import React, { useState } from 'react'
import { useRouter } from 'next/router'
import nookies from 'nookies'

function LogoutPage() {
  return (

    <main style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <div className="logoutScreen">
        <section className="logoArea">
          <img src="https://alurakut.vercel.app/logo.svg" />

          <p><strong>Até mais!</strong></p>
          <p>Redirecionando você de volta para o login</p>
          <h2><a href="/login">Clique <strong>aqui</strong> se você não foi redirecionado (e nem vai)</a></h2>
        </section>

        <footer className="footerArea">
          <p>
            © {new Date().getFullYear()} alura.com.br - <a href="#">Sobre o Orkut.br</a> - <a href="#">Centro de segurança</a> - <a href="#">Privacidade</a> - <a href="#">Termos</a> - <a href="#">Contato</a>
          </p>
        </footer>
      </div>
    </main>

  )
}

async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  nookies.destroy(context, 'USER_TOKEN')
  // console.log('Cookies', cookies)

  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  }
  // return {
  //   dummy_props: {
  //     message: 'Za Warudo'
  //   }
  // }

}

export default LogoutPage
// export { getServerSideProps }