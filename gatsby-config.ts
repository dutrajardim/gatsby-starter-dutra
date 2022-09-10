import * as path from 'path'
import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
    siteMetadata: {
        title: "Shortly Exercise"
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: path.join(__dirname, 'src', 'images')
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: path.join(__dirname, 'src', 'data')
            }
        },
        'gatsby-transformer-inline-svg',
        'gatsby-transformer-yaml',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-postcss'
    ]
}

export default config