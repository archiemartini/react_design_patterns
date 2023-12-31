export const partiallyApply = (Component, partialProps) => {
  return props => {
    return <Component {...partialProps} {...props} />
  }
}

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button style={{
      padding: size === 'large' ? '32px' : '8px',
      fontSize: size === 'large' ? '32px' : '8px',
      backgroundColor: color,
    }} {...props}>{text}</button>
  )
}

export const DangerButtonPartial = partiallyApply(Button, { color: 'red' })
export const BigSuccessButtonPartial = partiallyApply(Button, { color: 'green', size: 'large' })