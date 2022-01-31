using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieInfoApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace MovieInfoApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TitlesController : ControllerBase
    {
        private TitlesContext TitlesDBContext;

        public TitlesController(TitlesContext titlesContext)
        {
            TitlesDBContext = titlesContext;
        }

        [Route("GetTitles")]
        [HttpGet]
        public IActionResult GetTitles()
        {
            return Ok(TitlesDBContext.Titles);
        }

        [Route("GetTitles/{name}")]
        [HttpGet]
        public IActionResult GetTitlesByID(string name)
        {
            return Ok(TitlesDBContext.Titles.Where(x => x.TitleName.StartsWith(name)));
        }

        [Route("GetTitleInfo/{titleID}")]
        [HttpGet]
        public IActionResult GetTitleInfoByID(string titleID)
        {
            Dictionary<string, string> titleInfoDict = new Dictionary<string, string>();
            if (TitlesDBContext.Titles.Any(x => x.TitleId.ToString() == titleID))
            {
                Title title = TitlesDBContext.Titles.First(x => x.TitleId.ToString() == titleID);
                titleInfoDict.Add("TitleName", title.TitleName);
                titleInfoDict.Add("Year", title.ReleaseYear.ToString());
                titleInfoDict.Add("Awards", string.Join(", ", TitlesDBContext.Awards.Where(x => x.TitleId == title.TitleId).Select(x => x.Award1).ToList()));
                titleInfoDict.Add("StoryLine", string.Join(", ", TitlesDBContext.StoryLines.Where(x => x.TitleId == title.TitleId).Select(x => string.Format("{0} : {1}", x.Type, x.Description)).ToList()));
                titleInfoDict.Add("Genre", string.Join(", ", TitlesDBContext.Genres.Where(x => TitlesDBContext.TitleGenres.Where(x => x.TitleId == title.TitleId).Any(y => y.GenreId == x.Id)).Select(x => x.Name).ToList()));
                titleInfoDict.Add("Participants", string.Join(", ", TitlesDBContext.Participants.Where(x => TitlesDBContext.TitleParticipants.Where(x => x.TitleId == title.TitleId).Any(y => y.ParticipantId == x.Id)).Select(x => x.Name).ToList()));
            }
            return Ok(titleInfoDict);
        }
    }
}
