import styled from 'styled-components';

interface SidebarWrapperProps {
  isSidebarOpen: boolean;
  displaySidebar: boolean;
}

export const SidebarWrapper = styled.aside<SidebarWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  width: 432px;
  z-index: 3000;
  background-color: rgba(255, 255, 255, 0.7);
  opacity: 1;
  animation: ${({ isSidebarOpen }) => isSidebarOpen && 'fadeIn 2s linear'};
  display: ${({ displaySidebar }) => displaySidebar && 'flex'};
  animation: ${({ isSidebarOpen }) => !isSidebarOpen && 'fadeOut 2s linear'};
  display: ${({ displaySidebar }) => !displaySidebar && 'none'};

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .close-button {
    margin-top: 1rem;
    cursor: pointer;
  }
`;
