export interface IHelloWorldProps {
  children: string
}

export default function HelloWorld(props: IHelloWorldProps) {
  return <pre>{props.children}</pre>
}
