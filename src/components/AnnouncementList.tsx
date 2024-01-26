import React from 'react'
import AnnouncementCard from './AnnouncementCard'

const AnnouncementList = () => {
  return (
    <>
      <AnnouncementCard
        data={{
          cardTitle: "Receba no WhatsApp",
          description:
            "Acompanhe as melhores promoções da internet no seu WhatsApp",
          footer: "Receba as melhores",
        }}
      />
      <AnnouncementCard
        data={{
          cardTitle: "Receba no Instagram",
          description:
            "Siga a gente no Instagram e não perca mais nenhuma oferta!",
          footer: "Seguir perfil",
        }}
      />
      <AnnouncementCard
        data={{
          cardTitle: "Receba no Telegram",
          description:
            "Nosso canal no telegram também manda todas as promoções",
          footer: "Entrar no canal",
        }}
      />
    </>
  )
}

export default AnnouncementList