import { useEffect, useState } from "react";
import styled from "styled-components";
import { UserList } from "./UserList";
import { useDebounce } from "use-debounce";
import useFetch from "../hooks/useFetch";

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

  const [data] = useFetch({ url: "https://jsonplaceholder.typicode.com/users" })
  const [filteredUsers, setFilteredUsers] = useState([])
  const [userSearch, setUserSearch] = useState("")
  const [debouncedValue] = useDebounce(filteredUsers, 1000)

  useEffect(() => {
    updateArray(userSearch)
  }, [userSearch, data])

  function updateArray(searchResult: string) {
    const filteredUsersArray = data?.filter((user: UserType) => {

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
    setUserSearch(event.target.value)
  }

  return (
    <Container>
      <StyledInput type="text" onChange={handleInputChange}/>
      <UserList userArray={debouncedValue} />
    </Container>
  )
}