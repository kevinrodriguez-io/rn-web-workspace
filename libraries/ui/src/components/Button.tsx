import React, { FC } from 'react'
import { TouchableOpacityProps, TextProps, Platform } from 'react-native'
import styled from '@emotion/native'

export type BaseButtonVariant =
  | 'PRIMARY'
  | 'SECONDARY'
  | 'INSTAGRAM'
  | 'FACEBOOK'
  | 'TWITTER'

const getButtonBackgroundColor = (
  disabled: boolean | null | undefined,
  variant: BaseButtonVariant,
) => {
  if (disabled) return 'rgba(120, 132, 158, 41)'
  switch (variant) {
    case 'PRIMARY':
      return 'rgba(102, 94, 255, 255)'
    case 'SECONDARY':
      return 'rgba(255, 46, 114, 255)'
    case 'INSTAGRAM':
      return '#DD307B'
    case 'FACEBOOK':
      return '#5975F8'
    case 'TWITTER':
      return '#00ACEE'
    default:
      throw new Error('Unknown Variant')
  }
}

export type BaseButtonProps = TouchableOpacityProps & {
  variant?: BaseButtonVariant
  isIcon?: boolean
}

const BaseButton = styled.TouchableOpacity<BaseButtonProps>(
  {
    height: 52,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ({ variant = 'PRIMARY', isIcon, disabled }) => ({
    ...(isIcon
      ? { padding: 14 }
      : {
          paddingVertical: 14,
          paddingHorizontal: 60,
        }),
    backgroundColor: getButtonBackgroundColor(disabled, variant),
  }),
)

type ButtonTextProps = TextProps & {
  disabled?: boolean | null
  disableUpperCase?: boolean | null
}

const ButtonText = styled.Text<ButtonTextProps>(
  {
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
  },
  ({ disabled, disableUpperCase }) => ({
    ...Platform.select({
      web: {
        fontFamiliy: "'Open Sans', sans-serif",
        fontWeight: '400',
      },
      native: {
        fontFamily: 'OpenSans_400Regular',
      },
    }),
    color: disabled ? 'rgba(69, 79, 99, 255)' : 'rgba(255, 255, 255, 255)',
    textTransform: disableUpperCase ? 'capitalize' : 'uppercase',
  }),
)

export type ButtonProps = BaseButtonProps & {
  disableUpperCase?: boolean
  isIcon?: boolean
}

export const Button: FC<ButtonProps> = ({
  variant = 'PRIMARY',
  disableUpperCase = false,
  disabled = false,
  isIcon = false,
  children,
  ...props
}) => {
  return (
    <BaseButton
      isIcon={isIcon}
      variant={variant}
      disabled={disabled}
      {...props}
    >
      {isIcon ? (
        children
      ) : (
        <ButtonText disabled={disabled}>{children}</ButtonText>
      )}
    </BaseButton>
  )
}
