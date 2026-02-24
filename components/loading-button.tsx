'use client'

import { Button, ButtonProps } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean
  loadingText?: string
}

export function LoadingButton({
  isLoading,
  loadingText = 'Loading...',
  children,
  disabled,
  ...props
}: LoadingButtonProps) {
  return (
    <Button disabled={isLoading || disabled} {...props}>
      {isLoading ? (
        <>
          <Spinner className="mr-2 h-4 w-4" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  )
}
