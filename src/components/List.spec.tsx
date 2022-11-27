import { render, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import List from './List' 

describe('List Component', () => {
  it('should render Eduardo and Matheus on the list', async () => {
    const { getByText, queryByText, rerender, unmount } = render(<List initialItems={['Eduardo', 'Matheus']} />)

    expect(getByText('Eduardo')).toBeInTheDocument()
    expect(getByText('Matheus')).toBeInTheDocument()
  });

  it('should be able to add new item to the list', async () => {
    const { getByText, getByPlaceholderText } = render(<List initialItems={[]} />)

    const inputElement = getByPlaceholderText('Nome do integrante');
    const addButton = getByText('Adicionar');

    userEvent.type(inputElement, 'teste');
    userEvent.click(addButton);

    await waitFor(() => {
      expect(getByText('teste')).toBeInTheDocument()
    })
  });

  it('should be able to remove all items from the list', async () => {
    const { getAllByText, queryByText } = render(<List initialItems={['Eduardo']} />)

    const removeButtons = getAllByText('X');

    userEvent.click(removeButtons[0]);

    await waitFor(() => {
      expect(queryByText('Eduardo')).not.toBeInTheDocument()
      expect(queryByText('Matheus')).not.toBeInTheDocument()
    })
  });
});