import * as React from "react"
import { Container, Box, Kicker, Heading, Text } from "./ui"
import Feature from "./feature"

export default function FeatureList(props) {
  return (
    <Container width="fullbleed">
      <Box background="muted" radius="large">
        <Box center paddingY={5}>
          <Heading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
          {props.text && <Text>{props.text}</Text>}
        </Box>
        {props.content.map((feature, i) => (
          <Feature key={feature.ContentID} {...feature.Data} flip={Boolean(i % 2)} />
        ))}
      </Box>
    </Container>
  )
}
