import React from 'react'
import styled from 'styled-components'
import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons'

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
const ColumnNoShrink = Column.extend`
  flex-shrink: 0;
`
const ColumnCenter = ColumnNoShrink.extend`
  align-self: center;
`
const TabletOnly = ColumnNoShrink.extend`
  @media screen and (max-width: 350px) {
    display: none;
  }
`
const EntryText = styled.p`
  margin: 0;
`
const EntryTextHead = EntryText.extend`
  font-weight: bold;
  padding-bottom: 0.3rem;
`
const EntryTextTruncated = EntryText.extend`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
export default ({ entry: { type, from, to, date, number, name } }) => {
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
