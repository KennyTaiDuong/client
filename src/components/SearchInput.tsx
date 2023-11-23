import { useEffect, useState } from "react";
import styled from "styled-components";
import { UserList } from "./UserList";
import { useDebounce } from "use-debounce";

const Container = styled.div`
  padding: 1rem;
`

const StyledInput = styled.input`

`

type AddressType = {
  city: string,
  geo: {
    lat: string,
    lng: string,
  },
  street: string,
  suite: string,
  zipcode: string
}

type CompanyType = {
  bs: string,
  catchPhrase: string,
  name: string
}

type UserType = {
  address: AddressType,
  company: CompanyType,
  email: string,
  id: number,
  name: string,
  phone: string,
  username: string,
  website: string
}

export const SearchInput = () => {

  const [userData, setUserData] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [debouncedValue] = useDebounce(filteredUsers, 1000)

  useEffect(() => {
    async function fetchUserData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await res.json()

        setUserData(data)
        setFilteredUsers(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchUserData()

  }, [])

  function updateArray(searchResult: string) {
    const filteredUsersArray = userData?.filter((user: UserType) => {

      const name = user.name.toLowerCase()
      const email = user.email.toLowerCase()
      const search = searchResult.toLowerCase()
      
      if (name.includes(search) || email.includes(search)) {
        return user
      }
    })

    setFilteredUsers(filteredUsersArray)
  }

  function handleInputChange(event: any) {
    updateArray(event.target.value)
  }

  return (
    <Container>
      <StyledInput type="text" onChange={handleInputChange}/>
      <UserList userArray={debouncedValue} />
    </Container>
  )
}