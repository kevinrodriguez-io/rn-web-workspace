import React, { FC } from 'react'
import { TextProps, Platform, PressableProps } from 'react-native'
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

export type BaseButtonProps = PressableProps & {
  variant?: BaseButtonVariant
  isIcon?: boolean
}

const BaseButton = styled.Pressable<BaseButtonProps>(
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
    /**
     * Loading fonts is a little bit different in web
     * vs mobile, in web we usually import different
     * font weights for the same font family and have fallbacks,
     * on mobile the usual pattern is to have the apple postscript
     * file name in both android and ios projects so it can be
     * properly used. To install additional fonts you can use:
     * npx react-native-get-google-font
     */
    ...Platform.select({
      web: {
        fontFamiliy: "'Open Sans', sans-serif",
        fontWeight: '400',
      },
      native: {
        fontFamily: 'OpenSans-Regular',
      },
    }),
  },
  ({ disabled, disableUpperCase }) => ({
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
      style={(status) => ({
        ...Platform.select({
          web: {
            opacity: status.pressed ? 0.5 : 1,
            // Add others like focused, hovered
          },
          native: {
            opacity: status.pressed ? 0.5 : 1,
          },
        }),
      })}
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
