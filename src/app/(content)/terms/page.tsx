import Navbar from "@/components/Navbar"
import React from "react"

const PageTerms = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto container text-2xl gap-2 my-10 px-4">
        <p className="mb-4">
          Bem-vindo aos Termos de Serviço da Afiliado Store (&ldquo;nós&rdquo;,
          &ldquo;nosso&rdquo;, ou &ldquo;Afiliado Store&rdquo;). Ao acessar ou
          usar a aplicação Afiliado Store (a &ldquo;Aplicação&rdquo;), você
          concorda em ficar vinculado por estes Termos de Serviço.
        </p>
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">1. Uso da Aplicação</h2>
          <p>
            Ao utilizar a Afiliado Store, você reconhece que a nossa aplicação
            atua como uma plataforma de redirecionamento para ofertas de
            produtos de afiliados. Não vendemos diretamente nenhum produto. Ao
            clicar em um produto em nossa aplicação, você será redirecionado
            para o site do afiliado correspondente.
          </p>
          <p>
            Você concorda em utilizar a Afiliado Store apenas para fins legais e
            de acordo com estes Termos de Serviço. Você não deve usar a
            aplicação de qualquer forma que possa danificar, desativar,
            sobrecarregar ou prejudicar o funcionamento da Afiliado Store.
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">
            2. Responsabilidades do Usuário
          </h2>
          <p>
            Ao utilizar nossa aplicação, você reconhece que todas as transações
            e interações decorrentes do redirecionamento para os sites de
            afiliados estão sujeitas aos termos e políticas desses sites. A
            Afiliado Store não se responsabiliza por quaisquer problemas,
            transações ou disputas que possam surgir entre você e os sites de
            afiliados.
          </p>
          <p>
            Você concorda em fornecer informações precisas e atualizadas ao
            utilizar a Afiliado Store. Não nos responsabilizamos por informações
            imprecisas fornecidas por você.
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">3. Propriedade Intelectual</h2>
          <p>
            A Afiliado Store e seu conteúdo, incluindo mas não se limitando a
            textos, gráficos, logotipos, ícones e imagens, são propriedade
            exclusiva da Afiliado Store ou de seus licenciadores e estão
            protegidos por leis de direitos autorais.
          </p>
          <p>
            Você concorda em não reproduzir, distribuir, modificar, exibir,
            realizar, republicar, transmitir, criar trabalhos derivados ou
            explorar de outra forma qualquer parte do conteúdo sem a permissão
            expressa por escrito da Afiliado Store.
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">
            4. Modificações dos Termos de Serviço
          </h2>
          <p>
            A Afiliado Store reserva-se o direito de modificar ou revisar estes
            Termos de Serviço a qualquer momento, a seu exclusivo critério. As
            alterações entrarão em vigor imediatamente após a publicação na
            aplicação. O uso contínuo da Afiliado Store após tais modificações
            constituirá sua aceitação dos Termos de Serviço revisados.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">5. Disposições Gerais</h2>
          <p>
            Estes Termos de Serviço constituem o acordo integral entre você e a
            Afiliado Store e regem o uso da aplicação, substituindo quaisquer
            acordos anteriores.
          </p>
          <p>
            Se qualquer disposição destes Termos de Serviço for considerada
            inválida ou inexequível por qualquer motivo, tal disposição será
            eliminada ou limitada na medida mínima necessária, enquanto as
            demais disposições permanecerão em pleno vigor e efeito.
          </p>
        </section>
      </main>
    </>
  )
}

export default PageTerms
