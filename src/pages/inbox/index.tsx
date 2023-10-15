import Avatar from "@/components/common/avatar"
import { Card } from "@/components/common/card"

export default function InboxPage() {

  const cards = [
    {
      type: 'practice',
      modality: 'singles',
      status: 'request',
      title: 'Practice Request',
      location: 'Belo Horizonte, MG',
      people: [
        {
          id: '19128412',
          name: 'Luiz Eduardo',
          ntrp: 4.5
        }
      ]
    },
    {
      type: 'match',
      modality: 'singles',
      status: 'active',
      title: 'Match',
      location: 'Belo Horizonte, MG',
      people: [
        {
          id: '191232328412',
          name: 'Pedro Pimenta',
          ntrp: 3.5
        },
      ]
    },
    {
      type: 'lesson',
      modality: 'singles',
      status: 'request',
      title: 'Lesson Request',
      location: 'Belo Horizonte, MG',
      people: [
        {
          id: '2319128412',
          name: 'Joana',
          ntrp: 3.5
        }
      ]
    },
  ]

  return (
    <div className='p-2'>
      <div className='flex gap-2 flex-col'>
        {cards.map((card, index) => (
          <Card.wrapper key={index}>
            <Card.header
              title={card.title}
              location={card.location}
            />
            <Card.body>
              <div className='flex justify-between'>
                {card.people.map(people => (
                  <div key={people.id}>
                    <div className='w-24 h-24 bg-gray-200 rounded'></div>
                    <h3 className='leading-none mt-1'>{people.name}</h3>
                    <span className='leading-none text-sm text-gray-400'>NTRP {people.ntrp || '-'}</span>
                  </div>
                ))}
                
              </div>
            </Card.body>
          </Card.wrapper>
        ))}
      </div>
    </div>
  )
}