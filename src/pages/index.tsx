import * as React from 'react'
import { graphql, HeadProps, PageProps } from 'gatsby'

export function Head(props: HeadProps): JSX.Element {
    return (
        <>
            <title>Gatsby Starter Dutra</title>
            {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
            <link href="https://fonts.googleapis.com/css2?family=Alata&family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" /> */}
        </>
    )
}

export default function Index({ data }: PageProps<DataProps>): React.ReactElement {
    return (
        <section className='flex flex-col justify-center items-center bg-slate-200 h-screen'>


            <div className='text-center mb-20'>
                <h1 className='text-4xl font-bold text-primary mt-3 mb-5'>
                    {data.site.title}
                </h1>
                <p className='text-slate-700'>
                    {data.site.description}
                </p>
            </div>

            <a
                className='flex items-center space-x-5 py-3 px-10 bg-white rounded-full transition-all duration-500 hover:bg-slate-700 hover:text-white'
                href={data.site.socials.github.link}
                target="_blank">

                <div
                    className='w-10'
                    dangerouslySetInnerHTML={{ __html: data.site.socials.github.image.svg.content }} />
                <span className='font-bold'>Project on github</span>
            </a>
        </section>
    )
}

interface DataProps {
    site: {
        title: string,
        description: string,
        socials: {
            github: {
                link: string,
                image: {
                    svg: { content: string }
                }
            }
        }
    }
}

export const query = graphql`
    query MainQuery {
        site: dataYaml {
            title
            description
            socials {
                github {
                    link
                    image {
                        svg {
                            content
                        }
                    }
                }
            }
        }
    }
`