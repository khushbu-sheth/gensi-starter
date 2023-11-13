import { Box } from 'grommet'

// Theme-like object specifying alignment, width, and spacing for
// an PageContainer.
export const containerStyles = {
  gap: 'large',
  width: {
    min: 'medium'
  }
}

export const PageContainer = ({ ...rest }) => (
  <Box
    gap={containerStyles.gap}
    height={{ min: '100%' }}
    width={containerStyles.width}
    flex={false}
    {...rest}
  />
)
