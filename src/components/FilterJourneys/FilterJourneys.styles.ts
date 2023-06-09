import styled, { css } from 'styled-components';
import SInput from '@/app/styled/Input';

export const FormField = styled(SInput)`
  flex: 1;
`;

export const NumberField = styled(SInput)`
  width: 80px;
`;

export const SFilters = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.appBoxPadding};
  border-right: 4px solid ${({ theme }) => theme.appBackgroundColor};

  .form-section {
    border: none;
    padding: none;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
  }

  .field-header {
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .fieldset-title {
    margin-bottom: 12px;
  }

  .field-title {
    font-size: 14px;
    color: ${({ theme }) => theme.blackColor};
  }

  .form-controls {
    transition: 0.3s;
    display: flex;
    justify-content: space-between;

    button:first-child {
      flex: 2;
    }

    button[type='reset'] {
      flex: 1;
      margin-left: 12px;
    }
  }

  .input-line {
    display: flex;
    align-items: center;

    &__spacer {
      width: 20px;
      margin: 0 8px;
      height: 1px;
      background-color: ${({ theme }) => theme.secondaryColor};
    }

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const SSortingSwitch = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SSortingOption = styled.button<{ isActive: boolean }>`
  box-sizing: border-box;
  padding: 4px 12px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  color: ${({ theme }) => theme.blackColor};
  background: transparent;
  transition: 0.3s;
  margin-right: 8px;
  border: 1px solid ${({ theme }) => theme.secondaryColor};

  ${({ isActive }) =>
    isActive &&
    css`
      border: 1px solid ${({ theme }) => theme.primaryColor};
    `}

  &:hover {
    outline: none;
    transform: scale(1.05);
  }
`;
