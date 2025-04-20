import React from 'react';
import { Typography } from '@material-ui/core';
import { CopyWrapper } from './CopyWrapper';
import { ImgWrapper } from './ImgWrapper';
import { getLink } from '../functions'

// Variables
const assetsURL = process.env.PUBLIC_URL + "/assets";
const onboardingLink = assetsURL + "/rd-onboarding/";
const dashboardingLink = assetsURL + "/rd-dashboard/";

export const ProjectsData = [
    {
        title: "Rocket Dollar Onboarding",
        get link() {
            return getLink(this.title);
        },
        mainImage: onboardingLink + "IsoCenter.jpg",
        gridTiles: [
            {
                elementType: "copy",
                cols: {
                    xs: 12,
                    sm: 6,
                },
                copy: {
                    heading: "Rocket Dollar Onboarding",
                    get headingTag() {
                       return <Typography variant="h2">{this.heading}</Typography>
                    },
                    // body: ``,
                    get bodyTag() {
                        return <Typography variant="body1">{this.body}</Typography>
                     },
                    get wrapper() {
                        return (
                            <CopyWrapper>
                                {this.headingTag}
                                {this.bodyTag}
                            </CopyWrapper>
                        )
                    }, 
                },
            },
            {
                elementType: "image",
                cols: {
                    xs: 12,
                    sm: 6,
                },
                image: {
                    imageSrc: onboardingLink + "IsoLeft.jpg",
                    imageAlt: "image",
                    get wrapper() {
                        return <ImgWrapper src={this.imageSrc} alt={this.imageAlt} />
                    },
                }
            },
            {
                elementType: "image",
                cols: {
                    xs: 12,
                    sm: 6,
                },
                image: {
                    imageSrc: onboardingLink + "RealWorld-2.jpg",
                    imageAlt: "image",
                    get wrapper() {
                        return <ImgWrapper src={this.imageSrc} alt={this.imageAlt} />
                    },
                }
            },
            // {
            //     elementType: "space",
            //     cols: {
            //         xs: 12,
            //         sm: 6,
            //     },
            //     imageSrc: null,
            //     imageAlt: null,
            //     heading: null,
            //     body: null,
            // },
            // {
            //     elementType: "space",
            //     cols: {
            //         xs: 12,
            //         sm: 6,
            //     },
            //     imageSrc: null,
            //     imageAlt: null,
            //     heading: null,
            //     body: null,
            // },
            {
                elementType: "image",
                cols: {
                    xs: 12,
                    sm: 6,
                },
                image: {
                    imageSrc: onboardingLink + "Triptych.jpg",
                    imageAlt: "image",
                    get wrapper() {
                        return <ImgWrapper src={this.imageSrc} alt={this.imageAlt} />
                    },
                }
            },
            {
                elementType: "image",
                cols: {
                    xs: 12,
                    sm: 6,
                },
                image: {
                    imageSrc: onboardingLink + "DiagonalBrick.jpg",
                    imageAlt: "image",
                    get wrapper() {
                        return <ImgWrapper src={this.imageSrc} alt={this.imageAlt} />
                    },
                }
            },
            // {
            //     elementType: "space",
            //     cols: {
            //         xs: 12,
            //         sm: 6,
            //     },
            //     imageSrc: null,
            //     imageAlt: null,
            //     heading: null,
            //     body: null,
            // },
            // {
            //     elementType: "space",
            //     cols: {
            //         xs: 12,
            //         sm: 6,
            //     },
            //     imageSrc: null,
            //     imageAlt: null,
            //     heading: null,
            //     body: null,
            // },
            {
                elementType: "image",
                cols: {
                    xs: 12,
                    sm: 6,
                },
                image: {
                    imageSrc: onboardingLink + "RealWorld-1.jpg",
                    imageAlt: "image",
                    get wrapper() {
                        return <ImgWrapper src={this.imageSrc} alt={this.imageAlt} />
                    },
                }
            },
            {
                elementType: "image",
                cols: {
                    xs: 12,
                    sm: 6,
                },
                image: {
                    imageSrc: onboardingLink + "VerticalBrick.jpg",
                    imageAlt: "image",
                    get wrapper() {
                        return <ImgWrapper src={this.imageSrc} alt={this.imageAlt} />
                    },
                }
            },
            // {
            //     elementType: "space",
            //     cols: {
            //         xs: 12,
            //         sm: 6,
            //     },
            //     imageSrc: null,
            //     imageAlt: null,
            //     heading: null,
            //     body: null,
            // },
            // {
            //     elementType: "space",
            //     cols: {
            //         xs: 12,
            //         sm: 6,
            //     },
            //     imageSrc: null,
            //     imageAlt: null,
            //     heading: null,
            //     body: null,
            // },
            {
                elementType: "image",
                cols: {
                    xs: 12,
                    sm: 6,
                },
                image: {
                    imageSrc: onboardingLink + "RealWorld.jpg",
                    imageAlt: "image",
                    get wrapper() {
                        return <ImgWrapper src={this.imageSrc} alt={this.imageAlt} />
                    },
                }
            },
        ]
    },
    {
        title: "Rocket Dollar Dashboard",
        get link() {
            return getLink(this.title);
        },
        mainImage: dashboardingLink + "IsoCenter.jpg",
        gridTiles: [
            {
                elementType: "copy",
                cols: {
                    xs: 12,
                    sm: 6,
                },
                copy: {
                    heading: "Rocket Dollar Dashboard",
                    get headingTag() {
                       return <Typography variant="h2">{this.heading}</Typography>
                    },
                    // limit 290 charcters
                    // body: `When I first arrived to Rocket Dollar they had already launched the
                    // first version of thier onboarding process. When the process was built RD
                    // was less than 6 months old and just needed a way to get.`,
                    get bodyTag() {
                        return <Typography variant="body1">{this.body}</Typography>
                     },
                    get wrapper() {
                        return (
                            <CopyWrapper>
                                {this.headingTag}
                                {this.bodyTag}
                            </CopyWrapper>
                        )
                    }, 
                },
            },
            {
                elementType: "image",
                cols: {
                    xs: 12,
                    sm: 6,
                },
                image: {
                    imageSrc: dashboardingLink + "IsoLeft.jpg",
                    imageAlt: "image",
                    get wrapper() {
                        return <ImgWrapper src={this.imageSrc} alt={this.imageAlt} />
                    },
                }
            },
            {
                elementType: "image",
                cols: {
                    xs: 12,
                    sm: 6,
                },
                image: {
                    imageSrc: dashboardingLink + "RealWorld-2.jpg",
                    imageAlt: "image",
                    get wrapper() {
                        return <ImgWrapper src={this.imageSrc} alt={this.imageAlt} />
                    },
                }
            },
            // {
            //     elementType: "space",
            //     cols: {
            //         xs: 12,
            //         sm: 6,
            //     },
            //     imageSrc: null,
            //     imageAlt: null,
            //     heading: null,
            //     body: null,
            // },
            // {
            //     elementType: "space",
            //     cols: {
            //         xs: 12,
            //         sm: 6,
            //     },
            //     imageSrc: null,
            //     imageAlt: null,
            //     heading: null,
            //     body: null,
            // },
            {
                elementType: "image",
                cols: {
                    xs: 12,
                    sm: 6,
                },
                image: {
                    imageSrc: dashboardingLink + "Triptych.jpg",
                    imageAlt: "image",
                    get wrapper() {
                        return <ImgWrapper src={this.imageSrc} alt={this.imageAlt} />
                    },
                }
            },
            {
                elementType: "image",
                cols: {
                    xs: 12,
                    sm: 6,
                },
                image: {
                    imageSrc: dashboardingLink + "DiagonalBrick.jpg",
                    imageAlt: "image",
                    get wrapper() {
                        return <ImgWrapper src={this.imageSrc} alt={this.imageAlt} />
                    },
                }
            },
            // {
            //     elementType: "space",
            //     cols: {
            //         xs: 12,
            //         sm: 6,
            //     },
            //     imageSrc: null,
            //     imageAlt: null,
            //     heading: null,
            //     body: null,
            // },
            // {
            //     elementType: "space",
            //     cols: {
            //         xs: 12,
            //         sm: 6,
            //     },
            //     imageSrc: null,
            //     imageAlt: null,
            //     heading: null,
            //     body: null,
            // },
            {
                elementType: "image",
                cols: {
                    xs: 12,
                    sm: 6,
                },
                image: {
                    imageSrc: dashboardingLink + "RealWorld-1.jpg",
                    imageAlt: "image",
                    get wrapper() {
                        return <ImgWrapper src={this.imageSrc} alt={this.imageAlt} />
                    },
                }
            },
            {
                elementType: "image",
                cols: {
                    xs: 12,
                    sm: 6,
                },
                image: {
                    imageSrc: dashboardingLink + "VerticalBrick.jpg",
                    imageAlt: "image",
                    get wrapper() {
                        return <ImgWrapper src={this.imageSrc} alt={this.imageAlt} />
                    },
                }
            },
            // {
            //     elementType: "space",
            //     cols: {
            //         xs: 12,
            //         sm: 6,
            //     },
            //     imageSrc: null,
            //     imageAlt: null,
            //     heading: null,
            //     body: null,
            // },
            // {
            //     elementType: "space",
            //     cols: {
            //         xs: 12,
            //         sm: 6,
            //     },
            //     imageSrc: null,
            //     imageAlt: null,
            //     heading: null,
            //     body: null,
            // },
            {
                elementType: "image",
                cols: {
                    xs: 12,
                    sm: 6,
                },
                image: {
                    imageSrc: dashboardingLink + "RealWorld.jpg",
                    imageAlt: "image",
                    get wrapper() {
                        return <ImgWrapper src={this.imageSrc} alt={this.imageAlt} />
                    },
                }
            },
        ]
    }
]