import { useState } from 'react'

import { Grade } from '@/common/types'
import { LearnBlock } from '@/components/learnCard/learnBlock'
import { RateBlock } from '@/components/learnCard/rateBlock'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './learnCard.module.scss'

import { LearnCardProps } from './learnCard.types'

export const LearnCard = ({ card, deckName, onSubmit, open = false }: LearnCardProps) => {
  const [rateMode, setRateMode] = useState(open)

  const handleSubmit = (data: Grade) => {
    onSubmit(data, setRateMode)
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Learn “{deckName}”
      </Typography>
      <LearnBlock description={card.question} img={card.questionImg} main={'Question'} />

      <Typography as={'p'} className={s.shots} variant={'subtitle2'}>
        <Typography as={'span'} className={s.shotsDescription} variant={'body2'}>
          Number of attempts to answer the question:{' '}
        </Typography>
        {card.shots}
      </Typography>

      {rateMode ? (
        <RateBlock answer={card.answer} answerImg={card.answerImg} onSubmit={handleSubmit} />
      ) : (
        <Button className={s.button} fullWidth onClick={() => setRateMode(true)}>
          Show Answer
        </Button>
      )}
    </Card>
  )
}
