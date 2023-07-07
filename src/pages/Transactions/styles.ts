import styled from 'styled-components'

export const TransactionContainer = styled.div`
  width: 100%;
  max-width: 1120px;

  padding: 0 1.5rem;
  margin: 4rem auto 0;
`

export const TransactionTable = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    background: ${(props) => props.theme['gray-700']};

    padding: 1.25rem 2rem;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlightProps {
  $variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.$variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
