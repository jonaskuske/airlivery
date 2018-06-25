import React from 'react'
import styled from 'styled-components'

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
const DesktopOnly = Column.extend`
  @media screen and (max-width: 900px) {
    display: none;
  }
`
const TabletOnly = styled.div`
  @media screen and (max-width: 350px) {
    display: none;
  }
`
const EntryText = styled.p`
  margin: 0;
`
const EntryTextTruncated = EntryText.extend`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
export default ({ entry: { from, to, destination, date, number, name } }) => (
  <StyledEntry>
    <Column>
      <EntryTextTruncated>
        <b>Sendungs-Nr.</b>
      </EntryTextTruncated>
      <EntryTextTruncated>
        <span>{name}</span>
        <br />
        <span>{number}</span>
      </EntryTextTruncated>
    </Column>
    <TabletOnly>
      <EntryText>
        <b>Datum</b>
      </EntryText>
      <EntryText>{date}</EntryText>
    </TabletOnly>
    <DesktopOnly>
      <EntryTextTruncated>
        <b>Abladeort</b>
      </EntryTextTruncated>
      <EntryTextTruncated>{destination}</EntryTextTruncated>
    </DesktopOnly>
    <Column>
      <EntryTextTruncated>
        <b>Empfänger</b>
      </EntryTextTruncated>
      <EntryTextTruncated>{to}</EntryTextTruncated>
    </Column>
    <DesktopOnly>
      <EntryTextTruncated>
        <b>Absender</b>
      </EntryTextTruncated>
      <EntryTextTruncated>{from}</EntryTextTruncated>
    </DesktopOnly>
  </StyledEntry>
)
