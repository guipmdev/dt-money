import { styled, css } from 'styled-components'

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  width: 100%;
  max-width: 1120px;

  padding: 0 1.5rem;
  margin: 0 auto;
  margin-top: -5rem;
`

interface SummaryCardProps {
  $variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme['gray-600']};

  padding: 2rem;
  border-radius: 6px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;

    margin-top: 1rem;

    font-size: 2rem;
  }

  ${(props) =>
    props.$variant === 'green' &&
    css`
      background: ${props.theme['green-700']};
    `}
`
