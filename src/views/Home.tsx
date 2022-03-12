import React from 'react'

import LoadingSvg from '@/assets/images/loading.svg'
import SearchIcon from '@/assets/images/search-alt.svg'

import Title from '@/components/Title'
import Input from '@/components/Input'
import CardDrink from '@/components/CardDrink'

import { useDrinks } from '@/contexts/drinksContext'

const HomePage: React.FC = () => {
  const { isLoading, searchName, searchByName, drinks } = useDrinks()

  return (
    <main>
      <Title>
        Welcome to
        <br /> Easy Drink 😋
      </Title>

      <Input
        value={searchName}
        onChange={(e) => searchByName(e.target.value)}
        onClickButton={() => searchByName(searchName)}
        fullWidth={true}
        icon={SearchIcon}
        height='lg'
        placeholder='Search a drink name'
      />

      {isLoading ? (
        <img
          src={LoadingSvg}
          width={128}
          height={128}
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        />
      ) : (
        <div className='grid grid-cols-3 gap-20 mt-24'>
          {drinks.map((drink) => (
            <CardDrink key={drink.idDrink} drink={drink} />
          ))}
        </div>
      )}
    </main>
  )
}

export default HomePage
