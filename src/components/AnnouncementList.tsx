"use client"
import React from 'react'
import AnnouncementCard from './AnnouncementCard'
import useStoreInfo from '@/hooks/useStore'

const AnnouncementList = () => {
  const storeInfo = useStoreInfo()

  return (
    <>
      {storeInfo.storeContact?.socialWhatsApp && (
        <AnnouncementCard
          data={{
            cardTitle: "Receba no WhatsApp",
            description:
              "Acompanhe as melhores promoções da internet no seu WhatsApp",
            footer: "Receba as melhores",
            url: storeInfo.storeContact?.socialWhatsApp!,
          }}
        />
      )}
      {storeInfo.storeContact?.socialInstagram && (
        <AnnouncementCard
          data={{
            cardTitle: "Receba no Instagram",
            description:
              "Siga a gente no Instagram e não perca mais nenhuma oferta!",
            footer: "Seguir perfil",
            url: storeInfo.storeContact?.socialInstagram!,
          }}
        />
      )}
      {storeInfo.storeContact?.socialTelegram && (
        <AnnouncementCard
          data={{
            cardTitle: "Receba no Telegram",
            description:
              "Nosso canal no telegram também manda todas as promoções",
            footer: "Entrar no canal",
            url: storeInfo.storeContact?.socialTelegram!,
          }}
        />
      )}
      {storeInfo.storeContact?.socialFacebook && (
        <AnnouncementCard
          data={{
            cardTitle: "Nosso Facebook",
            description:
              "Nossa página no Facebook também manda todas as promoções",
            footer: "Seguir página",
            url: storeInfo.storeContact?.socialFacebook!,
          }}
        />
      )}
    </>
  )
}

export default AnnouncementList