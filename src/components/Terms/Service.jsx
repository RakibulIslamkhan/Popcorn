import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Service() {
  const [tab, setTab] = useState(1);
  const show = "tab-content-show";
  const hide = "tab-content-hide";
  const handleChange = (newValue) => {
    setTab(newValue);
  };
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.default",
          py: "3rem",
          color: "text.primary",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Button onClick={() => handleChange(1)}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "text.primary",
                    gap: "1rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <FolderIcon />
                    <Typography
                      variant="body1"
                      sx={{ textTransform: "capitalize" }}
                    >
                      Getting Started
                    </Typography>
                  </Box>
                  <ChevronRightIcon />
                </Box>
              </Button>
              <Button onClick={() => handleChange(2)}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "text.primary",
                    gap: "1rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <FolderIcon />
                    <Typography
                      variant="body1"
                      sx={{ textTransform: "capitalize" }}
                    >
                      Getting Started
                    </Typography>
                  </Box>
                  <ChevronRightIcon />
                </Box>
              </Button>
              <Button onClick={() => handleChange(3)}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "text.primary",
                    gap: "1rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <FolderIcon />
                    <Typography
                      variant="body1"
                      sx={{ textTransform: "capitalize" }}
                    >
                      Getting Started
                    </Typography>
                  </Box>
                  <ChevronRightIcon />
                </Box>
              </Button>
              <Button onClick={() => handleChange(4)}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "text.primary",
                    gap: "1rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <FolderIcon />
                    <Typography
                      variant="body1"
                      sx={{ textTransform: "capitalize" }}
                    >
                      Getting Started
                    </Typography>
                  </Box>
                  <ChevronRightIcon />
                </Box>
              </Button>
              <Button onClick={() => handleChange(5)}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "text.primary",
                    gap: "1rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <FolderIcon />
                    <Typography
                      variant="body1"
                      sx={{ textTransform: "capitalize" }}
                    >
                      Getting Started
                    </Typography>
                  </Box>
                  <ChevronRightIcon />
                </Box>
              </Button>
            </Grid>
            <Grid item xs={12} md={9} sx={{ textAlign: "justify", mt:{xs:'2rem', lg:'0'} }}>
              <Typography className={`${tab === 1 ? show : hide}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                illum. Enim ab vero libero voluptates voluptatum necessitatibus
                quod magni dolore.1
              </Typography>
              <Typography className={`${tab === 2 ? show : hide}`}>
                Ut sit sed libero eaque iure error quod, tenetur quo voluptas
                expedita adipisci iste, illo incidunt aspernatur explicabo minus
                laudantium quaerat! Veniam est corporis fugiat soluta iusto
                repellat molestias
                <br />
                <br />
                reiciendis et nobis quae? Recusandae perspiciatis animi
                distinctio soluta temporibus consequatur veritatis voluptates
                corporis rerum dolor culpa, ut quas dolore voluptate ullam ipsam
                nihil, totam, cum reiciendis aliquam? Nesciunt sunt
                exercitationem nam culpa quo consequatur necessitatibus rem
                laborum doloremque numquam minus nihil nulla maxime iusto
                inventore voluptas ipsa quam tempore dolorem totam nobis atque,
                quis vel quasi.
              </Typography>
              <Typography className={`${tab === 3 ? show : hide}`}>
                Fuga nobis eaque odit. Dignissimos exercitationem minus amet
                temporibus quod vel mollitia vitae deserunt aut repellat,
                laborum sapiente cumque tempora animi nesciunt quaerat. Et fugit
                placeat minus? A optio maxime consequuntur sunt quas quibusdam
                in repellendus nam nulla! Sapiente eum debitis, sed, repudiandae
                incidunt cumque minima ipsam nobis commodi, dolorum vitae
                corporis. Ut sit sed libero eaque iure error quod, tenetur quo
                voluptas expedita adipisci iste, illo incidunt aspernatur
                explicabo minus laudantium quaerat! Veniam est corporis fugiat
                soluta iusto repellat molestias
                <br />
                <br />
                reiciendis et nobis quae? Recusandae perspiciatis animi
                distinctio soluta temporibus consequatur veritatis voluptates
                corporis rerum dolor culpa, ut quas dolore voluptate ullam ipsam
                nihil, totam, cum reiciendis aliquam? Nesciunt sunt
                exercitationem nam culpa quo consequatur necessitatibus rem
                laborum doloremque numquam minus nihil nulla maxime iusto
                inventore voluptas ipsa quam tempore dolorem totam nobis atque,
                quis vel quasi.
                <br />
                <br />
                Qui voluptates quia adipisci pariatur eaque, perferendis quasi
                saepe quibusdam voluptatem veniam aperiam assumenda ea vitae
                dolorem quos fugiat tempora soluta officiis cupiditate suscipit,
                debitis dolores dicta iusto nesciunt. Vel adipisci nesciunt
                soluta,
              </Typography>
              <Typography className={`${tab === 4 ? show : hide}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                reiciendis sapiente cupiditate ex id laborum! Ab aperiam,
                perspiciatis optio voluptate adipisci natus ut id incidunt
                dolorem odit similique quia provident sequi aliquam minus modi
                ipsum ratione laudantium eligendi sit eveniet! Eum aliquid
                beatae, dolores eos cum similique quis autem blanditiis modi
                dolor numquam alias suscipit labore voluptatum nulla nisi! Sint
                distinctio ullam ad aspernatur tempore impedit, eos porro
                voluptates vel enim suscipit sunt accusamus? Debitis repellat,
                ipsam officiis excepturi dignissimos corporis harum quisquam
                repellendus nesciunt cumque molestias doloribus accusamus
                deserunt voluptatum cupiditate ullam illum ducimus laudantium
                aut magnam laborum.
                <br />
                <br />
                Fuga nobis eaque odit. Dignissimos exercitationem minus amet
                temporibus quod vel mollitia vitae deserunt aut repellat,
                laborum sapiente cumque tempora animi nesciunt quaerat. Et fugit
                placeat minus? A optio maxime consequuntur sunt quas quibusdam
                in repellendus nam nulla! Sapiente eum debitis, sed, repudiandae
                incidunt cumque minima ipsam nobis commodi, dolorum vitae
                corporis. Ut sit sed libero eaque iure error quod, tenetur quo
                voluptas expedita adipisci iste, illo incidunt aspernatur
                explicabo minus laudantium quaerat! Veniam est corporis fugiat
                soluta iusto repellat molestias
                <br />
                <br />
                reiciendis et nobis quae? Recusandae perspiciatis animi
                distinctio soluta temporibus consequatur veritatis voluptates
                corporis rerum dolor culpa, ut quas dolore voluptate ullam ipsam
                nihil, totam, cum reiciendis aliquam? Nesciunt sunt
                exercitationem nam culpa quo consequatur necessitatibus rem
                laborum doloremque numquam minus nihil nulla maxime iusto
                inventore voluptas ipsa quam tempore dolorem totam nobis atque,
                quis vel quasi.
                <br />
                <br />
                Qui voluptates quia adipisci pariatur eaque, perferendis quasi
                saepe quibusdam voluptatem veniam aperiam assumenda ea vitae
                dolorem quos fugiat tempora soluta officiis cupiditate suscipit,
                debitis dolores dicta iusto nesciunt. Vel adipisci nesciunt
                soluta, itaque magni illum repudiandae facilis pariatur saepe
                non incidunt sunt molestiae, natus et doloribus illo qui
                temporibus? Et iure molestias accusantium blanditiis sapiente
                velit illum, quidem labore explicabo, amet alias quasi at.
                <br />
                <br />
                Tempora et quisquam fugit veniam ducimus reiciendis delectus
                consectetur, voluptatem nisi atque rerum beatae eveniet sapiente
                eligendi asperiores, nobis similique id eos, hic omnis sequi
                earum dolorum numquam! Blanditiis praesentium aliquam voluptate
                laboriosam consequuntur ducimus voluptas iure reprehenderit
                quaerat possimus voluptatum, ipsam maiores quibusdam nam quae.
                Aspernatur ut architecto unde? Repellat, delectus quod.
              </Typography>
              <Typography className={`${tab === 5 ? show : hide}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                reiciendis sapiente cupiditate ex id laborum! Ab aperiam,
                perspiciatis optio voluptate adipisci natus ut id incidunt
                dolorem odit similique quia provident sequi aliquam minus modi
                ipsum ratione laudantium eligendi sit eveniet! Eum aliquid
                beatae, dolores eos cum similique quis autem blanditiis modi
                dolor numquam alias suscipit labore voluptatum nulla nisi! Sint
                distinctio ullam ad aspernatur tempore impedit, eos porro
                voluptates vel enim suscipit sunt accusamus? Debitis repellat,
                ipsam officiis excepturi dignissimos corporis harum quisquam
                repellendus nesciunt cumque molestias doloribus accusamus
                deserunt voluptatum cupiditate ullam illum ducimus laudantium
                aut magnam laborum.
                <br />
                <br />
                Fuga nobis eaque odit. Dignissimos exercitationem minus amet
                temporibus quod vel mollitia vitae deserunt aut repellat,
                laborum sapiente cumque tempora animi nesciunt quaerat. Et fugit
                placeat minus? A optio maxime consequuntur sunt quas quibusdam
                in repellendus nam nulla! Sapiente eum debitis, sed, repudiandae
                incidunt cumque minima ipsam nobis commodi, dolorum vitae
                corporis. Ut sit sed libero eaque iure error quod, tenetur quo
                voluptas expedita adipisci iste, illo incidunt aspernatur
                explicabo minus laudantium quaerat! Veniam est corporis fugiat
                soluta iusto repellat molestias
                <br />
                <br />
                reiciendis et nobis quae? Recusandae perspiciatis animi
                distinctio soluta temporibus consequatur veritatis voluptates
                corporis rerum dolor culpa, ut quas dolore voluptate ullam ipsam
                nihil, totam, cum reiciendis aliquam? Nesciunt sunt
                exercitationem nam culpa quo consequatur necessitatibus rem
                laborum doloremque numquam minus nihil nulla maxime iusto
                inventore voluptas ipsa quam tempore dolorem totam nobis atque,
                quis vel quasi.
                <br />
                <br />
                Qui voluptates quia adipisci pariatur eaque, perferendis quasi
                saepe quibusdam voluptatem veniam aperiam assumenda ea vitae
                dolorem quos fugiat tempora soluta officiis cupiditate suscipit,
                debitis dolores dicta iusto nesciunt. Vel adipisci nesciunt
                soluta, itaque magni illum repudiandae facilis pariatur saepe
                non incidunt sunt molestiae, natus et doloribus illo qui
                temporibus? Et iure molestias accusantium blanditiis sapiente
                velit illum, quidem labore explicabo, amet alias quasi at.
                <br />
                <br />
                Tempora et quisquam fugit veniam ducimus reiciendis delectus
                consectetur, voluptatem nisi atque rerum beatae eveniet sapiente
                eligendi asperiores, nobis similique id eos, hic omnis sequi
                earum dolorum numquam! Blanditiis praesentium aliquam voluptate
                laboriosam consequuntur ducimus voluptas iure reprehenderit
                quaerat possimus voluptatum, ipsam maiores quibusdam nam quae.
                Aspernatur ut architecto unde? Repellat, delectus quod. Magni
                accusamus, excepturi vero facilis dolor, impedit et doloribus
                veniam eligendi aperiam autem debitis id officia non
                exercitationem.
                <br />
                <br />
                Molestias accusantium temporibus aut reprehenderit iusto sequi
                eum vero omnis, quo quis explicabo corrupti tenetur corporis
                consequatur natus tempora perferendis mollitia. Reiciendis vel
                et repellendus adipisci impedit quo aut pariatur error, iure
                quasi debitis corrupti blanditiis unde natus, distinctio ratione
                laboriosam aspernatur esse sequi ipsum nostrum ut? Eius
                voluptates perspiciatis nisi quos blanditiis officia quisquam
                eos exercitationem quidem id totam veritatis eligendi,
                <br />
                <br />
                quis necessitatibus quam suscipit laborum? Debitis nisi, harum
                odit omnis repudiandae corrupti nobis aperiam ut magnam
                accusantium natus sapiente libero et adipisci ex saepe numquam,
                assumenda repellat illum totam qui. Dolores unde aliquam, vitae
                reprehenderit nulla blanditiis quasi! Enim rerum temporibus
                accusantium, numquam iure in quam. Placeat nobis quam nemo.
                Doloribus eos cum eius aperiam eaque a, accusamus ipsum rem
                aliquam. Maxime, voluptas! Minus sapiente vel maxime incidunt
                quasi magnam
                <br /> <br />
                cumque molestiae veniam officia illum repudiandae, non,
                doloribus error voluptatum, suscipit temporibus nam aliquid.
                Aspernatur assumenda labore officia vero debitis? Asperiores
                ullam sapiente minima iusto odio rem provident blanditiis
                ducimus aliquam tempora perferendis nostrum, quas recusandae
                reprehenderit dicta molestiae excepturi dolorum distinctio
                officiis dolorem fugit similique. Dolorum, mollitia enim ipsam
                animi atque asperiores eveniet laboriosam neque nostrum
                molestiae tempore possimus
                <br />
                totam, cupiditate velit cum sed consequuntur ratione inventore
                quibusdam molestias eos accusantium recusandae! Exercitationem
                enim doloremque mollitia? Tenetur nisi nam facilis porro illo
                dolorem eaque eveniet laboriosam assumenda minima? Earum nihil
                culpa accusamus nisi ut? 5
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
