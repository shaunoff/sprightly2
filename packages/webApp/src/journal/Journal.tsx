import React, { memo, useState } from 'react'
import Table from '../ui/Table'
import Icon from '../ui/Icon'
import Modal from '../ui/Modal'
import Button from '../ui/Button'
import ButtonGroup from '../ui/ButtonGroup'
import Badge from '../ui/Badge'
import { gql, useQuery, useMutation } from '@apollo/client'
import Happy from '../ui/icons/Happy'
import Sad from '../ui/icons/Sad'

import {
  GetJournalsQuery,
  GetJournalsQueryVariables,
  CreateJournalMutation,
  CreateJournalMutationVariables,
} from '@sprightly/types'

const GET_JOURNALS = gql`
  query GetJournals {
    journals {
      id
      entry
      rating
    }
  }
`
const CREATE_JOURNAL = gql`
  mutation CreateJournal($data: CreateJournalInput!) {
    createJournal(data: $data) {
      id
      entry
      rating
    }
  }
`

const Journal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [createJournal] = useMutation<CreateJournalMutation, CreateJournalMutationVariables>(CREATE_JOURNAL, {
    refetchQueries: [{ query: GET_JOURNALS }],
  })
  const { data, loading, called } = useQuery<GetJournalsQuery, GetJournalsQueryVariables>(GET_JOURNALS)

  const onCreate = () => {
    createJournal({
      variables: {
        data: {
          entry: 'boooooooooooooooommmmmmmm',
          rating: 6,
        },
      },
    })
  }

  if (loading || !called) {
    return null
  }
  const journals = data?.journals || []
  if (!journals) return null
  return (
    <div>
      <button onClick={() => onCreate()}>fgdhjsgfjh</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>hfsssssssssssdskjfggggggghdj</Modal.Header>
        <Modal.Body>
          hfsssssssssssdskjfggggggghdj
          <input />
        </Modal.Body>
        <Modal.Footer>
          <Button>Save</Button>
        </Modal.Footer>
      </Modal>
      <Badge type="success" onClose={() => {}}>
        Happy
      </Badge>
      <ButtonGroup>
        <Button icon={Happy}>Years</Button>
        <Button icon={Happy}>Months</Button>
        <Button icon={Sad}>Days</Button>
      </ButtonGroup>
      <Icon icon="vHappy" className="text-green-500 m-2" />
      <Icon icon="happy" className="text-lime-500 m-2" />
      <Icon icon="neutral" className="text-yellow-500 m-2" />
      <Icon icon="sad" className="text-orange-500 m-2" />
      <Icon icon="vSad" className="text-red-500 m-2" />
      <Table>
        <Table.Head>
          <Table.HeadCell>Hello</Table.HeadCell>
          <Table.HeadCell>Hello</Table.HeadCell>
        </Table.Head>
        <Table.Body striped>
          {journals.map((journalEntry) => (
            <Table.Row key={journalEntry?.id}>
              <Table.Cell>{journalEntry?.entry}</Table.Cell>
              <Table.Cell>{journalEntry?.rating}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

export default memo(Journal)
