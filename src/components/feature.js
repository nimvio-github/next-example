import * as React from "react"
import {
  Container,
  Section,
  Flex,
  Box,
  Subhead,
  Kicker,
  Text,
  ButtonList,
} from "./ui"

export default function Feature(props) {
  return (
    <Section padding={4} background="muted">
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half" order={props.flip ? 1 : null}>
            {props.image && (
              <img
                alt={props.image.AltText}
                src={props.image.MediaUrl}
                width="100%"
              />
            )}
          </Box>
          <Box width="half">
            <Subhead>
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              {props.heading}
            </Subhead>
            <Text variant="lead">{props.text}</Text>
            <ButtonList links={props.links} />
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}
