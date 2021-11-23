import React from 'react'
import styled from 'styled-components'
import { ArrowDropUp, ArrowDropDown } from '@mui/icons-material'

const StyledEntry = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 1rem;
  background: #eeeeee;
  > div {
    margin-right: 0.5rem;
  }
  > div:last-of-type {
    margin-right: 0;
  }
`
const Column = styled.div`
  min-width: 0;
`
const ColumnNoShrink = styled(Column)`
  flex-shrink: 0;
`
const ColumnCenter = styled(ColumnNoShrink)`
  align-self: center;
`
const TabletOnly = styled(ColumnNoShrink)`
  @media screen and (max-width: 350px) {
    display: none;
  }
`
const EntryText = styled.p`
  margin: 0;
`
const EntryTextHead = styled(EntryText)`
  font-weight: bold;
  padding-bottom: 0.3rem;
`
const EntryTextTruncated = styled(EntryText)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
export default function DeliveryListEntry({
  entry: { type, from, to, date, number, name },
}) {
  const isFrom = type === 'from'

  return (
    <StyledEntry>
      <ColumnCenter>
        {isFrom ? <ArrowDropUp /> : <ArrowDropDown />}
      </ColumnCenter>
      <Column>
        <EntryTextHead>Sendung</EntryTextHead>
        <EntryTextTruncated>
          <span style={{ opacity: 0.6 }}>#</span>
          <span>{number}</span>
          <br />
          <span>{name}</span>
        </EntryTextTruncated>
      </Column>
      <TabletOnly>
        <EntryTextHead>Datum</EntryTextHead>
        <EntryText>{date}</EntryText>
      </TabletOnly>
      <ColumnNoShrink>
        <EntryTextHead>{isFrom ? 'Empfänger' : 'Absender'}</EntryTextHead>
        <EntryTextTruncated>{isFrom ? to : from}</EntryTextTruncated>
      </ColumnNoShrink>
    </StyledEntry>
  )
}
