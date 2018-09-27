import styled, { css } from 'styled-components';
import { typography } from '../../../styles/settings.typography.styles';
import { minWidth } from '../../../styles/settings.breakpoints.styles';
import spacing from '../../../styles/settings.spacing.styles';

const Swatch = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: ${spacing.margin / 2}px;
  border-radius: 4px;
  font-size: ${typography.body.size.large};
  font-variation-settings: "wght" ${typography.weight.bold};
  line-height: 1;
  vertical-align: middle;
  cursor: pointer;
  appearance: none;

  &:last-child {
    margin-right: 0;
  }

  ${minWidth('375', () => css`
    width: 50px;
    height: 50px;
  `)}

  ${minWidth('768', () => css`
    margin-right: ${spacing.margin}px;

    &:nth-of-type(2) {
      margin-left: ${spacing.margin * 3}px;
    }
  `)}

  ${props => props.background && css`
    background-color: ${props.background};
  `}

  ${props => props.foreground && css`
    border: 1px solid ${props.foreground};
    color: ${props.foreground};
  `}
`;

export default Swatch;
