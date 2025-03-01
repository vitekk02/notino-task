import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

/* --- Header --- */
export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  background: #fff;
  border-bottom: 1px solid #eee;
  /* Ensure header sits below the navbar if needed */
  z-index: 100;
`;

export const BackButton = styled.button`
  padding: 8px 16px;
  font-size: 1rem;
  background: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2980b9;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
`;

/* --- Main Page Layout --- */
export const Container = styled.div`
  max-width: 1200px;
  margin: 24px auto;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const ImageSection = styled.div`
  /* no sticky positioning */
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  cursor: zoom-in;
  border-radius: 8px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  padding: 24px;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  color: #333;
  line-height: 1.2;
  text-align: center;
`;

export const Price = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin: 0;
  max-width: 600px;
  text-align: center;
`;

export const Category = styled.div`
  font-size: 1rem;
  color: #666;
  padding: 4px 12px;
  background: #f0f0f0;
  border-radius: 16px;
  display: inline-block;
`;

/* --- Modal Styles --- */
export const DialogOverlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
  z-index: 1000;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const DialogContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90vw;
  max-height: 90vh;
  padding: 20px;
  background: transparent;
  border: none;
  outline: none;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

export const DialogClose = styled(Dialog.Close)`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1002;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;
export const DialogTitle = styled(Dialog.Title)`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const DialogDescription = styled(Dialog.Description)`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
