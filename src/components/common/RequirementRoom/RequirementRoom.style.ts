import { ROOM_STATUS } from '@/constants/status';
import { RoomStatusType } from '@/types/status';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Flex } from '@radix-ui/themes';

export const RequirementFlex = styled(Flex)`
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  padding: 20px 16px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 16px;
    right: 16px;
    height: 1px;
    background-color: ${(props) => props.theme.colors.black500};
  }
`;

export const RequirementHeader = styled(Flex)`
  align-items: center;
  gap: 8px;
`;

export const RequirementJoin = styled.span<{ status: RoomStatusType }>`
  font-size: 12px;
  font-weight: 600;

  ${({ status, theme }) => {
    switch (status) {
      case ROOM_STATUS.COMPLETE:
        return css`
          color: ${theme.colors.black700};
        `;
      case ROOM_STATUS.PLAYING:
      case ROOM_STATUS.HIRING:
        return css`
          color: ${theme.colors.secondary};
        `;
      default:
        return '';
    }
  }}
`;

export const RequirementTitle = styled.span``;

export const RequirementDescription = styled.span`
  font-size: 15px;
  color: ${(props) => props.theme.colors.black500};
`;

export const RequirementTime = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.colors.black500};
`;
