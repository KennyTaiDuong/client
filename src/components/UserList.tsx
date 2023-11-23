import styled from "styled-components";
import { UserInput } from "./UserInput";

const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const UserInfoContainer = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid black;
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

type UserProps = {
  userArray: {
    address: AddressType,
    company: CompanyType,
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string
  }[] | undefined
}

export const UserList = ({ userArray }: UserProps) => {

  const UserElements = userArray?.map((user, index) => {
    return (
      <UserInfoContainer key={index}>
        <UserInput user={user} />
      </UserInfoContainer>
    )
  })

  return (
    <Container>
      {UserElements}
    </Container>
  )
}