import Navbar from "@/components/Navbar"
import React from "react"

const PagePrivacy = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto container text-2xl gap-2 my-10 px-4">
        <p className="mb-4">
          Bem-vindo à Política de Privacidade da Afiliado Store ("nós", "nosso",
          ou "Afiliado Store"). Ao acessar ou usar a aplicação Afiliado Store (a
          "Aplicação"), você concorda em cumprir esta Política de Privacidade.
        </p>
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">1. Informações Coletadas</h2>
          <p>
            Ao utilizar a Afiliado Store, podemos coletar informações pessoais,
            como seu nome, endereço de e-mail e dados de navegação. Essas
            informações são coletadas de forma voluntária por você ao usar nossa
            aplicação.
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">2. Uso das Informações</h2>
          <p>
            Utilizamos as informações coletadas para fornecer, manter, proteger
            e melhorar nossa aplicação. As informações pessoais não serão
            vendidas, trocadas, transferidas ou fornecidas a terceiros sem o seu
            consentimento, exceto conforme exigido por lei.
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">3. Cookies</h2>
          <p>
            Podemos usar cookies para melhorar a experiência do usuário. Você
            pode configurar seu navegador para recusar todos ou alguns cookies,
            ou para alertá-lo quando os sites definirem ou acessarem cookies. No
            entanto, isso pode afetar a funcionalidade da Afiliado Store.
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">4. Links para Terceiros</h2>
          <p>
            A Afiliado Store pode conter links para sites de terceiros. Não
            somos responsáveis pelas práticas de privacidade desses sites.
            Recomendamos que você revise as políticas de privacidade desses
            sites ao interagir com eles.
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">5. Segurança</h2>
          <p>
            Implementamos medidas de segurança para proteger suas informações.
            No entanto, nenhum método de transmissão pela internet ou método de
            armazenamento eletrônico é 100% seguro, e não podemos garantir a
            segurança absoluta dos dados.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">
            6. Alterações nesta Política de Privacidade
          </h2>
          <p>
            Reservamo-nos o direito de atualizar ou modificar esta Política de
            Privacidade a qualquer momento. As alterações entrarão em vigor
            imediatamente após a publicação na aplicação. Recomendamos que você
            revise periodicamente esta página para estar ciente das alterações.
          </p>
        </section>
      </main>
    </>
  )
}


export default PagePrivacy
