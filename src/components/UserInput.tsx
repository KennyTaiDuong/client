import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`

`

const NameContainer = styled.p`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

const EmailContainer = styled.p`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

const UsernameContainer = styled.p`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

const StyledInputs = styled.input`
  font-size: 1.25rem;
  font-weight: 700;
  border: 0;
  width: 100%;

  &:focus {
    outline: 0;
  }
`

const ConfirmButton = styled.button`

`

const CancelButton = styled.button`

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
  user: {
    address: AddressType,
    company: CompanyType,
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string
  }
}

export const UserInput = ({ user }: UserProps) => {
  const [newName, setNewName] = useState("")
  const [newUsername, setNewUsername] = useState("")
  const [newEmail, setNewEmail] = useState("")

  const [oldName, setOldName] = useState("")
  const [oldEmail, setOldEmail] = useState("")

  useEffect(() => {
    setNewName(user.name)
    setNewUsername(user.username)
    setNewEmail(user.email)
    setOldName(user.name)
    setOldEmail(user.email)
  }, [user])  

  function handleNameConfirm() {
    setOldName(newName)
  }

  function handleNameCancel() {
    setNewName(oldName)
  }

  function handleEmailConfirm() {
    setOldEmail(newEmail)
  }

  function handleEmailCancel() {
    setNewEmail(oldEmail)
  }

  return (
    <Container>
      <NameContainer>
        Name:
        <StyledInputs value={newName} onChange={(e) => setNewName(e.target.value)} type="text" name="name"/>
        <CancelButton onClick={handleNameCancel}>Cancel Changes</CancelButton>
        <ConfirmButton onClick={handleNameConfirm}>Confirm Changes</ConfirmButton>
      </NameContainer>
      <EmailContainer>
        Email: 
        <StyledInputs value={newEmail} onChange={(e) => setNewEmail(e.target.value)} type="text" name="email"/>
        <CancelButton onClick={handleEmailCancel}>Cancel Changes</CancelButton>
        <ConfirmButton onClick={handleEmailConfirm}>Confirm Changes</ConfirmButton>
      </EmailContainer>
      <UsernameContainer>
        Username:
        <StyledInputs value={newUsername} onChange={() => {}} type="text" name="usename"/>
      </UsernameContainer>
    </Container>
  )
}