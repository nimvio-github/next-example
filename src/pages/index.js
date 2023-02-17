import Layout from "@/components/layout"
import * as sections from "@/components/sections"
import { client, getContentById } from "@/utils/dataFetching"

export default function Home({ contentData, footerData, headerData }) {
  const getSectionComp = (templateName) => {
    const sectionType = templateName.replaceAll(" ", "")
    return sections[sectionType]
  }

  return (
    <>
      <Layout headerData={headerData} footerData={footerData}>
        {contentData.map((content) => {
          const { ContentID, TemplateName, Data } = content
          const Component = getSectionComp(TemplateName) || Fallback
          return <Component key={ContentID} {...Data} />
        })}
      </Layout>
    </>
  )
}

export async function getStaticProps(_context) {
  const { data: { Data: { content: contentData } } } = await getContentById(client, "Content_81b8facc-0e81-45fe-a9a9-2c2be581dbd9", { deep: true })
  const { data: { Data: headerData } } = await getContentById(client, "Content_a3231b18-5a13-47ce-b363-888fa8323cfa", { deep: true })
  const { data: { Data: footerData } } = await getContentById(client, "Content_30c29898-24c0-4f21-ae75-590d3040d629", { deep: true })

  return {
    props: {
      contentData,
      headerData,
      footerData
    }, // will be passed to the page component as props
  }
}

